import * as React from 'react';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Chip, Avatar } from 'material-ui';
import { KnightChip } from '../KnightChip';
import { DragonChip } from '../DragonChip';
import Typography from 'material-ui/Typography/Typography';

interface Knight {
  name:      string;
  attack:    number;
  armor:     number;
  agility:   number;
  endurance: number;
}

interface GetGameServerResponse {
  gameId: number;
  knight: Knight;
}

export interface StartGameState extends GetGameServerResponse {
  scaleThickness: number;
  clawSharpness: number;
  wingStrength: number;
  fireBreath: number;
}

export class StartGame extends React.Component<{}, StartGameState> {
  public state = {
    gameId: null,
    knight: null,
    scaleThickness: null,
    clawSharpness: null,
    wingStrength: null,
    fireBreath: null,
  }

  componentWillMount () {
    fetch('http://www.dragonsofmugloar.com/api/game')
      .then(res => res.json())
      .then(({ gameId, knight }: GetGameServerResponse) => {
        this.setState({ gameId, knight });
      });
  }

  render () {
    if (!this.state.gameId) return null;

    return <Grid container justify="center">
      <Grid item>
        <Typography type="display1">
          { this.state.knight.name } vs Dragon
        </Typography>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <KnightChip label="Attack" power={this.state.knight.attack}/>
              </TableCell>

              <TableCell>
                <DragonChip
                  label="Scale tickness"
                  power={ this.state.scaleThickness }
                  onDrop={({ power }) => {
                    this.setState({ scaleThickness: power })
                  }}
                  onDelete={ () => this.setState({ scaleThickness: null })}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <KnightChip label="Armor" power={this.state.knight.armor}/>
              </TableCell>

              <TableCell>
                <DragonChip
                  label="Claw Sharpness"
                  power={ this.state.clawSharpness }
                  onDrop={({ power }) => {
                    this.setState({ clawSharpness: power })
                  }}
                  onDelete={ () => this.setState({ clawSharpness: null })}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <KnightChip label="Agility" power={this.state.knight.agility}/>
              </TableCell>

              <TableCell>
                <DragonChip
                  label="Wing Strength"
                  power={ this.state.wingStrength }
                  onDrop={({ power }) => {
                    this.setState({ wingStrength: power })
                  }}
                  onDelete={ () => this.setState({ wingStrength: null })}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <KnightChip label="Endurance" power={this.state.knight.endurance}/>
              </TableCell>

              <TableCell>
                <DragonChip
                  label="Fire Breath"
                  power={ this.state.fireBreath }
                  onDrop={({ power }) => {
                    this.setState({ fireBreath: power })
                  }}
                  onDelete={ () => this.setState({ fireBreath: null })}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  }
}
